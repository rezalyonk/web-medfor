pipeline {
    agent any
    
    tools {
        nodejs '21.6.1'
    }

    stages {
        stage('Build') {
            steps {
                script{
                    sh 'npm install'
                }
            }
        }

        stage('Testing') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Telah Terdeploy Sampai Tujuan'
                }
            }
        }
    }

    post {
        fixed{
            echo 'whatever the conditions, build, test, deploy,'
            echo 'I dont care success or error '
        }
    }
}
