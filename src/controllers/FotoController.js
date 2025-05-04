class FotoController {
  async index(req, res) {
    res.json(req.file);
  }
}

export default new FotoController();
