const express = require('express');
const router = express.Router();
const Faq = require('../models/Faq');

router.get('/', async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });
    res.json(faq);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const faq = new Faq({
    question: req.body.question,
    answer: req.body.answer,
  });

  try {
    const newFaq = await faq.save();
    res.status(201).json(newFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const faq = await Faq.findById(req.params.id);
    if (!faq) return res.status(404).json({ message: 'FAQ not found' });

    faq.question = req.body.question || faq.question;
    faq.answer = req.body.answer || faq.answer;

    const updatedFaq = await faq.save();
    res.json(updatedFaq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    // Find and delete the FAQ by its ID
    const deletedFaq = await Faq.findByIdAndDelete(req.params.id);

    if (!deletedFaq) {
      return res.status(404).json({ message: 'FAQ not found' });
    }

    res.json({ message: 'FAQ deleted successfully' });
  } catch (err) {
    console.error('Error during deletion:', err);
    res.status(500).json({ message: 'Server error during deletion' });
  }
});


module.exports = router;


