const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../schemas/contacts");

router.get("/", ctrl.getAllContacts);

router.post("/", validateBody(schemas.addSchema), ctrl.addAContact);

router.get("/:id", isValidId, ctrl.getContactById);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContactById
);

router.patch(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateFavoriteById
);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavoriteById
);

router.delete("/:id", isValidId, ctrl.removeContactById);

module.exports = router;
