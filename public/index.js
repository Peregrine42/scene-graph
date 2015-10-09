radio('new_scene_graph').subscribe(render);

// get the scene graph
var server_path = '/scene-graph-1'
http_wrapper.get_json(server-path, radio.broadcast('new_scene_graph'));

wait_for(http_wrapper.get_json(server_path))
  .and_call(radio.broadcast, 'new_scene_graph')

// show the root for now

// render