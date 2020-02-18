<?php

namespace Drupal\eie_blocks\Controller;

use Drupal\examples\Utility\DescriptionTemplateTrait;

/**
 * Controller routines for EiE Blocks module routes.
 */
class BlockExampleController {
  use DescriptionTemplateTrait;

  /**
   * {@inheritdoc}
   */
  protected function getModuleName() {
    return 'eie_blocks';
  }

}
