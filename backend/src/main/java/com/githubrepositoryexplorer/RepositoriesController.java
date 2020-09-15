package com.githubrepositoryexplorer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class RepositoriesController {

	@Autowired
	private RepositoriesSearchService repositoriesSearchService;

	@CrossOrigin(origins = "*")
	@GetMapping("/search/repositories")
	public ResponseEntity<String> search(
			@RequestParam(value="q") String query,
			@RequestParam(value="page") String page) {

		return repositoriesSearchService.listRepositories(query, page);
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/repositories/{id}")
	public ResponseEntity<String> repository(
			@PathVariable("id") String id) {

		return repositoriesSearchService.showRepository(id);
	}

	@CrossOrigin(origins = "*")
	@GetMapping("/users/{user}/repos")
	public ResponseEntity<String> userRepositories(
			@PathVariable("user") String user) {

		return repositoriesSearchService.listUserRepositories(user);
	}
}
