/* 
Game Manager for the Pong Demo

Luis Daniel Filorio Luna A01028418

2024-04-10
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// Neccessary to display text in the UI
using TMPro;

public class PongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;
    
    [SerializeField] TMP_Text scoreRight;
    [SerializeField] TMP_Text scoreLeft;
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
            Reset();
        }
    }

    public void Reset()
    {
        // Check that there is a ball and if destroys it
        if(ball != null)
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
    

    // Increase the score of the specified player
    public void Score(string side)
    {
        if(side == "left")
        {
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();
            InitGame();
        } else if (side == "right")
        {
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
            InitGame();
        }
    }
}
