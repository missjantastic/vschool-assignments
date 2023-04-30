const {v4: uuidv4} = require('uuid')
const express = require('express');
const bountyRouter = express.Router();

const bounties = [
    {firstName: 'Sheeve', lastName: 'Palpatine', living: true, type: 'sith', _id: uuidv4()},
    {firstName: 'Anakin', lastName: 'Skywalker', living: true, type: 'jedi', _id: uuidv4()},
    {firstName: 'Qui Gon', lastName: 'Gin', living: false, type: 'jedi', _id: uuidv4()}
]

bountyRouter.route('/')
    .get((req,res)=>{
        res.send(bounties);
    })
    .post((req, res)=>{
        const newBounty = req.body
        newBounty._id = uuidv4();
        bounties.push(newBounty);
        res.send(`Successfully added ${newBounty.firstName}`)
    })

bountyRouter.route('/:bountyId')
    .get((req,res)=>{
        const bountyId = req.params.bountyId;
        const foundBounty = bounties.find(bounty=>bounty._id === bountyId);
        res.send(foundBounty);
    })
    .put((req, res)=>{
        const bountyId = req.params.bountyId;
        const updatedBountyData = req.body;

        const bountyToEdit = bounties.findIndex(bounty=>bountyId===bounty._id);
        res.send(Object.assign(bounties[bountyToEdit], updatedBountyData));
    })
    .delete((req, res)=>{
        const bountyId = req.params.bountyId;
        const bountyToDelete = bounties.findIndex(bounty=>bountyId===bounty._id);
        bounties.splice(bounties[bountyToDelete],1);
        res.send(`Sucessfully deleted item`);
    })

module.exports = bountyRouter;