/*
Control the movements of a game paddle

Luis Daniel Filorio Luna - A01028418
09-04-2024
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle_Motion : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] Vector2 direction;
    [SerializeField] KeyCode positiveKey;
    [SerializeField] KeyCode negativeKey;
    [SerializeField] float limit;

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(positiveKey) && transform.position.y < limit) {
            transform.Translate(direction * speed * Time.deltaTime);
        } else if(Input.GetKey(negativeKey) && transform.position.y > -limit) {
            transform.Translate(-direction * speed * Time.deltaTime);
        }
    }
}
