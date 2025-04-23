class HomeController {
  index(req, res) {
    res.status(200).json({
      TudoOk: true,
    });
  }
}

export default new HomeController();
