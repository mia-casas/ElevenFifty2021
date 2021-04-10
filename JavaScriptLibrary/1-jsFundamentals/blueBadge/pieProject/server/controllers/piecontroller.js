const express = require("express");
const { PieModel } = require("../models");
const Pie = require("../models/pie");
const router = express.Router();
const {validateSession} = require("../middleware");

router.get("/cherry", (req, res) => res.send("I love cherry pie!"))

router.get("/blueberry", (req, res) => res.send("I love blueberry pie!"));

// router.get("/", (req, res) => res.send("I love pie!"));
router.get("/", async(req, res) =>{
    try{
        const allPies = await PieModel.findAll()

        res.status(200).json(allPies);
    } catch(err){
        res.status(500).json({
            error: err
        })
    }
});

router.post("/", validateSession, async (req,res) => {
    const {
        nameOfPie,
        baseOfPie,
        crust,
        timeToBake,
        servings,
        rating
    } = req.body

    try {
        const Pie = await PieModel.create({
            nameOfPie,
            baseOfPie,
            crust,
            timeToBake,
            servings,
            rating
        })

        res.status(201).json({
            message: "Pie sucessfully created",
            Pie
        })
        
    } catch (err){
        res.status(500).json({
            message: `Failed to create pie: ${err}`
        })

    }
})
// findOne()
router.get(":/nameOfPie", async (req, res) => {
    try {
      const locatedPie = await PieModel.findOne({
        where: {
          nameOfPie: req.params.nameOfPie,
        }, //unsure of this comma
      });
  
      res.status(200).json({
        message: "Pies successfully retrieved",
        locatedPie,
      });
    } catch (err) {
      res.status(500).json({
        message: `Failed to retrieve pies: ${err}`,
      });
    }
  });
  
  // update()
  router.put("/:id", async (req, res) => {
    const {
      nameOfPie,
      baseOfPie,
      crust,
      timeToBake,
      servings,
      rating,
    } = req.body;
  
    try {
      await PieModel.update(
        { nameOfPie, baseOfPie, crust, timeToBake, servings, rating },
        { where: { id: req.params.id }, returning: true }
      ).then((result) => {
        res.status(200).json({
          message: "Pie successfully updated",
          updatedPie: result,
        });
      });
    } catch (err) {
      res.status(500).json({
        message: `Failed to update pie: ${err}`,
      });
    }
  });
  // router.delete("./delete/:id", async (req, res) => {
  //   const pieId = req.params.id;

  //   try{
  //     const query = {
  //       where: {
  //         id: pieId
  //       }
  //     };
  //     await PieModel.destroy(query);
  //     res.status(200).json({message: "Pie is gone forever. RIP Pie"})
  //   } catch(err){
  //     res.status(500).json({error: err})
  //   }
  // })
  router.delete("/:id", async (req, res) => {
    try {
      await PieModel.destroy({
        where: {
          id: req.params.id
        }
      })
        res.status(200).json({
          message: "Pie successfully deleted. RIP Pie"
        })
    }
    catch(err){
      res.status(500).json({
        message: `Failed to delete pie: ${err}.`
      })
    }
  })

module.exports = router

// findOne - capitalize
// define updatePie
// change name to nameOfPie