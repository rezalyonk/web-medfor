pipeline {
    agent any
    
    tools {
        nodejs '21.6.1'
    }

    stages {
        stage('Pull from GitHub') {
    steps {
        script {
            // Cloning the GitHub repository
            checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/rezalyonk/web-medfor.git']]])
        }
    }
}

        
        stage('Testing') {
            steps {
                script {
                    // Navigate to the cloned repository directory
                    dir('web-medfor') {
                        // Run 'npm install' for testing
                        sh 'npm install'
                        // Add other testing commands if needed
                    }
                }
            }
        }
        
        stage('Push to GitLab') {
            steps {
                script {
                    // Commit and push changes to the GitLab repository
                    dir('web-medfor') {
                        // Configure GitLab credentials
                        withCredentials([usernamePassword(credentialsId: 'rlyonk', usernameVariable: 'GITLAB_USERNAME', passwordVariable: 'GITLAB_PASSWORD')]) {
                            // Check if 'main' branch already exists, if not create it
                            def branchExists = sh(script: "git show-ref --verify --quiet refs/heads/main", returnStatus: true) == 0
                            if (!branchExists) {
                                sh 'git checkout -b main'
                            } else {
                                sh 'git checkout main'
                            }

                            sh "git remote set-url origin https://$GITLAB_USERNAME:$GITLAB_PASSWORD@gitlab.com/rlyonk/web-medfor.git"
                            sh 'git add .'
                            sh 'git commit -m "Testing deploy"'
                            sh 'git push origin main'
                        }
                    }
                }
            }
        }
    }
}
