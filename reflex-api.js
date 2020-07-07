var reflex_api = (function (reflex_api) {
  "use strict"
  reflex_api.createTrigger = function(options) {
    trigger = {};
    trigger.case_sensitive = options.case_sensitive || false;
    trigger.enabled = options.enabled || true;
    trigger.matching = options.matching || "regexp";
    trigger.type = "trigger";
    trigger.whole_words = options.whole_words || true;
    trigger.text = options.text || "";
    trigger.actions = options.actions || [];
    trigger.p = options.parent || {};
    trigger.id = client.reflex_find_highest_id(options.package) + 1;
  };

  return reflex_api;

}(reflex_api || {});
