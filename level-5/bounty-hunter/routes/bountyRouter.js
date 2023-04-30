const {v4: uuidv4} = require('uuid')
const express = require('express');
const bountyRouter = express.Router();

const bounties = [
    {firstName: 'Sheeve', lastName: 'Palpatine', living: true, type: 'sith', id: uuidv4()},
    {firstName: 'Anakin', lastName: 'Skywalker', living: true, type: 'jedi', id: uuidv4()},
    {firstName: 'Qui Gon', lastName: 'Gin', living: false, type: 'jedi', id: uuidv4()}
]

bountyRouter.route('/')
    .get((req,res)=>{
        res.send(bounties);
    })
    .post((req, res)=>{
        const newBounty = req.body
        newBounty.id = uuidv4();
        bounties.push(newBounty);
        res.send(`Successfully added ${newBounty.firstName}`)
    })

module.exports = bountyRouter;