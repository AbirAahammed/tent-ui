pipeline {
    agent {
        label 'headvy-01' // Or any agent where Node.js is installed
    }

    environment {
        NODE_VERSIONS = "18 20 22"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Node.js Matrix Build') {
            steps {
                script {
                    def versions = NODE_VERSIONS.split()

                    for (version in versions) {
                        echo "Starting build with Node.js ${version}.x"

                        docker.image("node:${version}").inside {
                            sh '''
                                node --version
                                npm ci
                                npm run build || true
                                # npm test  # Uncomment if you want to run tests
                            '''
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
