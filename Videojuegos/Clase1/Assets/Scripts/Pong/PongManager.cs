/* 
Game Manager for the Pong Demo

Luis Daniel Filorio Luna A01028418

2024-04-10
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;
    
    public int pointsLeft;
    public int pointsRight;

    // Start is called before the first frame update
    void Start()
    {
        InitGame();   
    }   

    // Update is called once per frame
    void Update()
    {
        // Reset ball if the key R is pressed
        if(Input.GetKeyDown(KeyCode.R) && ball != null)
        {
            Destroy(ball);
            InitGame();
        }
    }

    // Start a new game
    void InitGame()
    {
        StartCoroutine(ServeBall());
    }

    IEnumerator ServeBall()
    {
        yield return new WaitForSeconds(2.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity = Random.insideUnitCircle.normalized * speed; 
    }
    

    // INcrease the score of the specified player
    public void Score(string side)
    {
        if(side == "left")
        {
            pointsLeft++;
            InitGame();
        } else if (side == "right")
        {
            pointsRight++;
            InitGame();
        }
    }
}
