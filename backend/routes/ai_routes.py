from flask import Blueprint, request, jsonify

ai = Blueprint("ai", __name__)

@ai.route("/generate-plan", methods=["POST"])
def generate_plan():

    data = request.json

    plan = f"""
PERSONALIZED FITNESS PLAN

Age: {data['age']}
Height: {data['height']} cm
Weight: {data['weight']} kg
Goal: {data['goal']}

DIET PLAN
• Breakfast: Oats + Banana + Milk
• Lunch: Rice + Dal + Salad
• Evening: Fruits + Nuts
• Dinner: Chapati + Vegetables

WORKOUT PLAN
• Walking - 30 mins
• Pushups - 15 reps
• Squats - 20 reps
• Stretching - 10 mins

FITNESS ADVICE
• Drink 3 Litres Water Daily
• Sleep 7-8 Hours
• Maintain Consistency
• Avoid Junk Food
"""

    return jsonify({
        "plan": plan
    })